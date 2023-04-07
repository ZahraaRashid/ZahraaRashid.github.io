<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
</head>
<body>
    <h1>Preview</h1>
    <?php
    if( $_GET['name'] == true )
    {
        echo $_GET['name']."<br>";
    }
    else
    {
        echo "Name: Not provided <br>";   
    }
    if( $_GET['username'] == true)
    {
        echo $_GET['username']."<br>";
    }
    else
    {
        echo "Username: Not provided <br>";
    }
    if( $_GET['password'] == true)
    {
        echo $_GET['password']."<br>";
    }
    else
    {
        echo "Password: Not provided <br>";
    }
    if( $_GET['address'] == true)
    {
        echo $_GET['address']."<br>";
    }
    else
    {
        echo "Address: Not provided <br>";
    }
    if( $_GET['countries'])
    {
        echo $_GET['countries']."<br>";
    }
    else
    {
        echo "Country: Not provided <br>";
    }  
    if($_GET['zip'] == true)
    {
        echo $_GET['zip']."<br>";
    }
    else
    {
        echo "Zip Code: Not provided <br>";
    }
    if($_GET['email'] == true)
    {
        echo $_GET['email']."<br>";
    }
    else
    {
        echo "Email: Not provided <br>";
    }
    if(empty($_GET['sex'])==false)
    {
        echo $_GET['sex']."<br>";
    }
    else
    {
        echo "Sex: Not provided <br>";
    }
    if(empty($_GET['languages']) == false)
    {
        foreach($_GET['languages'] as $item)
        {
            echo $item . " ";
        }
        echo "<br>";
    }
    else
    {
        echo "Language: Not provided <br>";
    }
    if($_GET['about'] == true)
    {
        echo $_GET['about']."<br>";
    }
    else
    {
        echo "About: Not Provided <br>";
    }
    ?>
</body>
</html>

