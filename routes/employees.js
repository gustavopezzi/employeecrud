exports.list = function (req, res) {
    req.getConnection(function(err, connection) {
        var query = connection.query('select * from employee', function (err, rows) {
            if (err) {
                console.log("Error Selecting: %s ", err);
            }
            res.render('employees', {
                page_title: "Employee List",
                employeeList: rows
            });
         });
    });
};

exports.add = function (req, res) {
    res.render('add_employee', {
        page_title: "Add Employee"
    });
};

exports.edit = function (req, res) {
    var id = req.params.id;
    req.getConnection(function (err, connection) {
        var query = connection.query('select * from employee where id = ?', [id], function (err, rows) {
            if (err) {
                console.log("Error Selecting : %s ",err );
            }
            if (rows.length > 0) {
                res.render('edit_employee', {
                    page_title: "Edit Employee",
                    employeeData: rows[0]
                });
            }
            else {
                console.log('Nothing found with the id %s', id);
                res.redirect('/employees');
            }
        });
    });
};

exports.save = function (req, res) {
    var input = JSON.parse(JSON.stringify(req.body));
    req.getConnection(function (err, connection) {
        var employeeData = {
            name: input.name,
            address: input.address,
            email: input.email,
            phone: input.phone
        };

        var query = connection.query("insert into employee set ? ", employeeData, function(err, rows) {
            if (err) {
                console.log("Error inserting : %s", err);
            }
            res.redirect('/employees');
        });
    });
};

exports.update = function (req, res) {
    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    req.getConnection(function (err, connection) {
        var employeeData = {
            name: input.name,
            address: input.address,
            email: input.email,
            phone: input.phone
        };
        connection.query("update employee set ? where id = ? ", [employeeData, id], function (err, rows) {
            if (err) {
                console.log("Error Updating : %s", err);
            }
            res.redirect('/employees');
        });
    });
};

exports.remove = function (req,res) {
     var id = req.params.id;
     req.getConnection(function (err, connection) {
        connection.query("delete from employee where id = ?", [id], function (err, rows) {
            if (err) {
                console.log("Error deleting : %s", err);
            }
            res.redirect('/employees');
        });
    });
};