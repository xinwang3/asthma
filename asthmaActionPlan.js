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
}

asthmaActionPlan.onclick=function(fun){
    asthmaActionPlan[fun]()
}
asthmaActionPlan.create=function(){ // create a new plan
    console.log('creating a new plan')
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
    asthmaActionPlan.div.innerHTML=h
    setInterval(function(){
        asthmaActionPlan_printedOn.textContent=new Date()
    },1000)
    // body
    var h = '<table><tr>'
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
    if(!localStorage.asthmaActionPlan_header){ // create asthma action plan


    }
    4
}



$(document).ready(function(){
    // if it is the base page go ahead and assemble it
    if(location.href.match('asthma/asthmaActionPlan.html')){
        asthmaActionPlan()
    }  
})