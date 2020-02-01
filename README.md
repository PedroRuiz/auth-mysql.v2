# Auth-mysql v2.0.0
By @pedroruizhidalg

---

## Abstract
This is a very effective and complete application to manage users of a given application. You can even manage more than one application, each with respective users. A user, identified by email, can appear in several applications, but as different users.

##Routes

| Routes        | Method | Request                | Successfull result     |
|---------------|--------|------------------------|------------------------|
|/apps/create   | POST   | { name }               | {apikey: apiKey, expiration_time, active:true, affectedRows : newApp.affectedRows} |
|/application/:appkey | GET | **void**  | **if app is active:** {apikey,name,create_time,end_time,active} |
|/signup        | POST   | {applicationkey,username,email,password,enddate} | {uuid,token} |
|/signin        | POST   | {appkey,uuid}          | {uuid,token}            |
|/signwithemailpassword | POST | {appkey,email,password} | {uuid,token} |
|/checktoken | POST | {token} | {checktoken: true} |

## Headers
Headers management is very simple: Each one bust contain, other way 
~~~
Content-Type: application/json
~~~
