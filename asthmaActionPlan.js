console.log('asthmaActionPlan.js loaded')

asthmaActionPlan=function(div){ // ini
    //console.log('ini')
    if(!div){
        if(!document.getElementById('asthmaActionPlanDiv')){
            asthmaActionPlan.div = document.createElement('div')
            $(asthmaActionPlan.div).addClass('container') // so bootstrap will deal with css
            asthmaActionPlan.div.id='asthmaActionPlanDiv'
            document.body.appendChild(asthmaActionPlan.div)
        }else{
            asthmaActionPlan.div=document.getElementById('asthmaActionPlanDiv')
        }
    }else{
        asthmaActionPlan.div=div
    }
    asthmaActionPlan.div.innerHTML='<button class="btn btn-primary" onclick="asthmaActionPlan.onclick(\'create\')">Create a new plan</button>, <button class="btn btn-primary" onclick="asthmaActionPlan.onclick(\'load\')">Load a local plan</button> or <button class="btn btn-primary" onclick="asthmaActionPlan.onclick(\'import\')">Import an external plan</button>.'
    // looks for fun in teh hash
    if(location.hash.length>0){
        asthmaActionPlan.onclick(location.hash.slice(1))
    }
}

//asthmaActionPlan.localStorage=localStorage.asthmaActionPlan
if(!localStorage.asthmaActionPlan){
    asthmaActionPlan.localStorage={}
}else{
    asthmaActionPlan.localStorage=JSON.parse(localStorage.asthmaActionPlan)
}

asthmaActionPlan.onclick=function(fun){
    asthmaActionPlan[fun]()
}
asthmaActionPlan.create=function(){ // create a new plan
    console.log('creating a new plan')
    asthmaActionPlan.localStorage.role='create'
    localStorage.asthmaActionPlan=JSON.stringify(asthmaActionPlan.localStorage)
    // start with the header
    var h = '<table><tr>'
    h+='<td style="vertical-align:top;padding:10px"><b style:>My Asthma Action Plan</b></td>'
    h+='<td style="vertical-align:top">'
        h+='<table>'
            h+='<tr><td>Name: <input type="text"  class="form-control" id="asthmaActionPlan_name"></td></tr>'
            h+='<tr><td>Printed on: <span style="color:blue;font-size:small" id="asthmaActionPlan_printedOn">'+new Date()+'</span></td></tr>'
            h+='<tr><td>Created on: <span style="color:navy;font-size:small">'+new Date()+'</span></td></tr>'
        h+='</table>'
    h+='</td>'
    h+='</tr></table>' 
    // body
    h+='<table style="border: 1px solid black">'
        h+='<tr><td><b>Asthma Triggers:</b> Colds or Infections, Exercise, Weather, Outdoor Allergies, Animal Allergies, Dust.</td></tr>'
        h+='<tr><td>'
            h+='<table style="border: 1px solid black;width:100%">'
                h+='<tr><td style="border: 1px solid black">My Best Peak Flow: 550 </td><td style="background-color:green;border: 1px solid black"> GREEN ZONE: DOING WELL</td></tr>'
                h+='<tr>'
                    h+='<td><table><tr><td style="vertical-align:top;padding:10px;border: 1px solid black;background-color:green">Peak flow more than <u>440</u> (greater than 80% of best)</td><td style="vertical-align:top;padding:10px;border: 1px solid black"><li>Breathing is good</li><li>No Cough or Wheeze</li><li>Can run and play normaly</li></td></tr></table></td>'
                    h+='<td style="vertical-align:top;padding:10px;border: 1px solid black"><i>Controler Medication(s):</i><div id="controlerMedications"></div></td>'
                h+='</tr>'
                h+='<tr>'
                    h+='<td style="border: 1px solid black">Use this medication 20 minutes before physical activity</td>'
                    h+='<td style="border: 1px solid black"><div id="controlerMedications20mins"></div></td>'
                h+='</tr>'
            h+='</table>'
        h+='</td></tr>'
        h+='<tr><td style="border: 1px solid black;background-color:yellow;text-align:center">YELLOW ZONE: CAUTION</td></tr>'
    h+='</table>'
    asthmaActionPlan.div.innerHTML=h
    setInterval(function(){
        asthmaActionPlan_printedOn.textContent=new Date()
    },1000)
    
}
asthmaActionPlan.import=function(){
    console.log('import')
    4
}
asthmaActionPlan.load=function(){
    console.log('load')
    4
}


asthmaActionPlan.header = function(){ // check header information
    if(!asthmaActionPlan.localStorage.head){ // create asthma action plan


    }
    4
}



$(document).ready(function(){
    // if it is the base page go ahead and assemble it
    if(location.href.match('asthma/asthmaActionPlan.html')){
        asthmaActionPlan()
    }  
})