function Acc(name,accountnumber,age)
{
    var m_pin = 5; //encapsulated property (Hidden)
    var m_balance=0 //encapsulated property

    this.name = name;  //property
    this.accountnumber = accountnumber; //property
    this.dateofbirth = dateofbirth;  //property
    this.nextofkin = nextofkin; //property
    this.deposit = deposit;	//method
    this.withdrawal = withdrawal; //method
    this.changepin=changepin; //method
    this.customerdetails=customerdetails; //method

    
    function deposit(amount)
    {
    	m_balance=m_balance+amount
        return m_balance;
    }

    function withdrawal(amount)
    {
        m_balance=m_balance-amount
        return  m_balance;
    }

    function changepin(newpin)
    {
        m_pin=newpin
        return  "successfully changed";
    }

   function customerdetails()
    {
       
        return  "Name: " + this.name + "Account Number: " + this.accountnumber ;
    }

}




//inheritance, mutation and polymorphism behavior
function Currentacc() {
  Acc.apply(this,accounttype);
  this.accounttype='current'
  this.withdrawal = withdrawal; //mutating method
 
 function withdrawal(amount)
    {
        m_balance=m_balance-amount-100 //deducts additional 100 from account
        return  m_balance;
    }
}