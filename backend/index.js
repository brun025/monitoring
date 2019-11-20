const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000; //porta padrão
const mysql = require('mysql');
var cors = require('cors') //  < --------------- IMPORTANTE (rode: npm install --save cors)
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

//configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors()) //  < --------------- IMPORTANTE

//definindo as rotas
const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
app.use('/', router);

//Login
router.post('/login', (req, res) =>{
    const email = req.body.email.substring(0, 50);
    const password = req.body.password.substring(0, 50);
    // console.log(email,password)

    execSQLQuery(`select * from user where email="${email}" and password="${password}"`, res);
})

//Users
router.get('/users/:id?', (req, res) => {
    let filter = '';
    if (req.params.id) filter = ' WHERE id=' + parseInt(req.params.id);
    execSQLQuery('SELECT * FROM user' + filter, res);
})

router.post('/users', (req, res) => {
    const name = req.body.name.substring(0, 150);
    const email = req.body.email.substring(0, 150);
    const password = req.body.password.substring(0, 150);
    const role = req.body.role.substring(0, 150);

    execSQLQuery(`INSERT INTO user(name, email, password, role) VALUES('${name}','${email}','${password}','${role}')`, res);
});

router.patch('/users/:id', (req, res) =>{
    const name = req.body.name.substring(0, 150);
    const email = req.body.email.substring(0, 150);
    const role = req.body.role.substring(0, 150);
    const id = parseInt(req.params.id);

    execSQLQuery(`UPDATE user SET name='${name}', email='${email}', role='${role}' WHERE id=${id}`, res);
})

router.delete('/users/:id', (req, res) => {
    execSQLQuery('DELETE FROM user WHERE id=' + parseInt(req.params.id), res);
})

//Types
router.get('/types/:id?', (req, res) => {
    let filter = '';
    if (req.params.id) filter = ' WHERE id=' + parseInt(req.params.id);
    execSQLQuery('SELECT * FROM type' + filter, res);
})

router.post('/types', (req, res) => {
    const name = req.body.name.substring(0, 150);
    let description = '';

    if(req.body.description){
        description = req.body.description.substring(0, 500);
    }

    execSQLQuery(`INSERT INTO type(name, description) VALUES('${name}','${description}')`, res);
});

router.patch('/types/:id', (req, res) =>{
    const name = req.body.name.substring(0, 150);
    const description = req.body.description.substring(0, 500);
    const id = parseInt(req.params.id);

    execSQLQuery(`UPDATE type SET name='${name}', description='${description}' WHERE id=${id}`, res);
})

router.delete('/types/:id', (req, res) => {
    execSQLQuery('DELETE FROM type WHERE id=' + parseInt(req.params.id), res);
})

//Coordinators
router.get('/coordinators/:id?', (req, res) => {
    let filter = '';
    if (req.params.id) filter = ' WHERE id=' + parseInt(req.params.id);
    execSQLQuery('SELECT * FROM coordinator' + filter, res);
})

router.post('/coordinators', (req, res) => {
    const name = req.body.name.substring(0, 150);
    const email = req.body.email.substring(0, 150);
    const password = req.body.password.substring(0, 150);
    const user_id = parseInt(req.body.user_id);
    // console.log(name,email,password)
    execSQLQuery(`INSERT INTO coordinator(name, email, password, user_id) VALUES('${name}','${email}','${password}','${user_id}')`, res);
});

router.patch('/coordinators/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    const name = req.body.name.substring(0, 150);
    const email = req.body.email.substring(0, 150);

    execSQLQuery(`UPDATE coordinator SET name='${name}', email='${email}' WHERE id=${id}`, res);
})

router.delete('/coordinators/:id', (req, res) => {
    execSQLQuery('DELETE FROM coordinator WHERE id=' + parseInt(req.params.id), res);
})

//Support
router.get('/supports/:id?', (req, res) => {
    let filter = '';
    if (req.params.id) filter = ' WHERE id=' + parseInt(req.params.id);
    execSQLQuery('SELECT * FROM support' + filter, res);
})

router.post('/supports', (req, res) => {
    const name = req.body.name.substring(0, 150);
    const email = req.body.email.substring(0, 150);
    const password = req.body.password.substring(0, 150);
    const user_id = parseInt(req.body.user_id);
    // console.log(name,email,password)
    execSQLQuery(`INSERT INTO support(name, email, password, user_id) VALUES('${name}','${email}','${password}','${user_id}')`, res);
});

router.patch('/supports/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    const name = req.body.name.substring(0, 150);
    const email = req.body.email.substring(0, 150);

    execSQLQuery(`UPDATE support SET name='${name}', email='${email}' WHERE id=${id}`, res);
})

router.delete('/supports/:id', (req, res) => {
    execSQLQuery('DELETE FROM support WHERE id=' + parseInt(req.params.id), res);
})

//Item
router.get('/items/:id?', (req, res) => {
    let filter = '';
    if (req.params.id) filter = ' WHERE id=' + parseInt(req.params.id);
    // execSQLQuery('SELECT * FROM item' + filter, res);
    execSQLQuery('select item.*,t.name as type_name,u.name as user_name from item join type as t on t.id=item.type_id join user as u on u.id=item.user_id' + filter, res);
})

router.get('/items/code/:code', (req, res) => {
    let code = req.params.code;
    // console.log(code)

    execSQLQuery(`select *from item where code='${code}'`, res);
});

router.patch('/items/code', (req, res) => {
    // let code = req.params.code;
    const amount = parseInt(req.body.amount);
    const code = req.body.code.substring(0, 150);

    execSQLQuery(`UPDATE item SET amount='${amount}' WHERE code='${code}'`, res);
});

router.post('/items', (req, res) => {
    const code = req.body.code.substring(0, 150);
    const lab = req.body.lab.substring(0, 10);
    const status = req.body.status.substring(0, 25);
    const date = req.body.date
    const amount = parseInt(req.body.amount)
    const name = req.body.name.substring(0, 150);
    const email = req.body.email.substring(0, 150);
    const type_id = parseInt(req.body.type_id);
    let description = '';

    if(req.body.description){
        description = req.body.description.substring(0, 500);
    }
    // console.log(code, lab, status, date, amount,name,email, type_id)
    execSQLQuery(`INSERT INTO item(code, lab, status, date, amount, name, email, type_id, description) VALUES('${code}','${lab}','${status}','${date}','${amount}','${name}','${email}','${type_id}','${description}')`, res);
});

router.patch('/items/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    const code = req.body.code.substring(0, 150);
    const lab = req.body.lab.substring(0, 10);
    const status = req.body.status;
    const date = req.body.date;
    const finalDate = req.body.finalDate;
    const user_id = req.body.user_id;
    const amount = parseInt(req.body.amount)
    const name = req.body.name.substring(0, 150);
    const email = req.body.email.substring(0, 150);
    const type_id = parseInt(req.body.type_id);
    const description = req.body.description.substring(0, 500);

    execSQLQuery(`UPDATE item SET user_id=${user_id},finalDate='${finalDate}',code='${code}', lab='${lab}', status='${status}', date='${date}', amount='${amount}',name='${name}', email='${email}', type_id='${type_id}', description='${description}' WHERE id=${id}`, res);
})

router.delete('/items/:id', (req, res) => {
    execSQLQuery('DELETE FROM item WHERE id=' + parseInt(req.params.id), res);
})

//Item
router.get('/request-items/', (req, res) => {
    execSQLQuery('select item.*,t.name as type_name from item join type as t on t.id=item.type_id where item.status="Aguardando"', res);
})

router.post('/sendMail', (req, res) => {

    var transporter = nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
          user: 'fuser263@gmail.com',
          pass: 'emailfake263'
        }
      }));
      
      var mailOptions = {
        from: 'teste@gmail.com',
        to: req.body.email,
        subject: req.body.subject,
        text: req.body.message
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      }); 
})

//inicia o servidor
app.listen(port);
console.log('API funcionando!');

function execSQLQuery(sqlQry, res) {
    const connection = mysql.createConnection({

        // host: '157.245.241.8',
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'monitoring'

    });

    connection.query(sqlQry, function(error, results, fields) {
        if (error)
            res.json(error);
        else
            res.json(results);
        connection.end();
        console.log('executou!');
    });
}


try {
    var sql = "CREATE TABLE IF NOT EXISTS user (id INTEGER NOT NULL AUTO_INCREMENT,"+
                " name VARCHAR(50) NOT NULL, email VARCHAR(50) UNIQUE NOT NULL, password VARCHAR(50) NOT NULL, role VARCHAR(25) NOT NULL, PRIMARY KEY (id));"

    execSQLQuery(sql, {
        json: (dbresponse) => {
            console.log(dbresponse)
        }
    })

    sql = "CREATE TABLE IF NOT EXISTS coordinator (id INTEGER NOT NULL AUTO_INCREMENT,"+
                " name VARCHAR(50) NOT NULL, email VARCHAR(50) UNIQUE NOT NULL, password VARCHAR(50) NOT NULL," +
                 " user_id INTEGER NOT NULL, PRIMARY KEY (id)," + 
                 " FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE RESTRICT);"

    execSQLQuery(sql, {
        json: (dbresponse) => {
            console.log(dbresponse)
        }
    })

    sql = "CREATE TABLE IF NOT EXISTS support (id INTEGER NOT NULL AUTO_INCREMENT,"+
                " name VARCHAR(50) NOT NULL, email VARCHAR(50) UNIQUE NOT NULL, password VARCHAR(50) NOT NULL," +
                " user_id INTEGER NOT NULL, PRIMARY KEY (id)," + 
                " FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE RESTRICT);"

    execSQLQuery(sql, {
        json: (dbresponse) => {
            console.log(dbresponse)
        }
    })

    sql = "CREATE TABLE IF NOT EXISTS type (id INTEGER NOT NULL AUTO_INCREMENT,"+
            " name VARCHAR(50) NOT NULL, description VARCHAR(200), PRIMARY KEY (id));"

    execSQLQuery(sql, {
        json: (dbresponse) => {
            console.log(dbresponse)
        }
    })

    sql = "CREATE TABLE IF NOT EXISTS item (id INTEGER NOT NULL AUTO_INCREMENT,"+
                " code VARCHAR(50) UNIQUE NOT NULL, lab VARCHAR(10) NOT NULL," +
                " date DATE NULL, finalDate DATE NULL, amount INTEGER NOT NULL, description VARCHAR(500)," +
                " name VARCHAR(50) NOT NULL, email VARCHAR(50) NOT NULL," + 
                " status VARCHAR(50) NOT NULL," + 
                " user_id INTEGER NULL, type_id INTEGER NOT NULL, PRIMARY KEY (id)," + 
                " FOREIGN KEY (type_id) REFERENCES type(id) ON DELETE RESTRICT,FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE RESTRICT);"

    execSQLQuery(sql, {
        json: (dbresponse) => {
            console.log(dbresponse)
        }
    })

    sql = "INSERT INTO user (name, email, password, role) VALUES ('admin', 'admin@user.com', '123456', 'admin')"

    execSQLQuery(sql, {
        json: (dbresponse) => {
            console.log('Usuário admin inserido')
        }
    })

} catch (error) {
    
}