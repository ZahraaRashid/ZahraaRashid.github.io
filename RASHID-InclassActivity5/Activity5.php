<!DOCTYPE html>
<html lang="en">
    <!--linking the style and adding the title -->
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="Activity5.css">
    <title>Exchange</title>
</head>
<!--creating the form -->
<body>
    <form action="Activity5.php" method="post">
        <!--creating the labels and input fields -->
        <label>From:</label>
        <input type="text" name="from" id="from" value="0">
        <!--creating the drop down menu for Currency -->
        <label>Currency:</label>
        <select name="from-currency" id="from-currency">
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="CAD">Canadian Dollar</option>
        </select> 
        <br>
        <!--creating the labels and input fields -->
        <label>To:</label>
        <input type="text" name="to" id="to" value="0" disabled>
        <!--creating the drop down menu for Currency -->
        <label>Currency:</label>
        <select name="to-currency" id="to-currency">
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="CAD">Canadian Dollar</option>
        </select> 
        <br>
        <!--creating the button -->
        <input id="convert-button" name="submit" type="submit" value="convert">
    </form>
    <!--creating the php code -->
    <?php
    /*creating the if statement to check if the submit button is clicked and to check the currency (to and from)*/
        if(isset($_POST['submit'])){
            $from = $_POST['from'];
            $fromCurrency = $_POST['from-currency'];
            $toCurrency = $_POST['to-currency'];
            $to = 0;
            if($fromCurrency == "USD"){
                if($toCurrency == "CAD"){
                    $to = $from * 1.36;
                }else if($toCurrency == "EUR"){
                    $to = $from * 0.91;
                }else{
                    $to = $from;
                }
            }else if($fromCurrency == "CAD"){
                if($toCurrency == "USD"){
                    $to = $from * 0.76;
                }else if($toCurrency == "EUR"){
                    $to = $from * 0.69;
                }else{
                    $to = $from;
                }
            }else{
                if($toCurrency == "USD"){
                    $to = $from * 1.10;
                }else if($toCurrency == "CAD"){
                    $to = $from * 1.44;
                }else{
                    $to = $from;
                }
            }
            /*creating the echo statement to display the result*/
            echo "<script>
            document.getElementById('to').value = $to;
            document.getElementById('from').value = $from;
            document.getElementById('from-currency').value = '$fromCurrency';
            document.getElementById('to-currency').value = '$toCurrency';
            </script>";
        }
    ?>
</body>
</html>
