function notify(props)
  -- print(props)
  SendNUIMessage({
    type = "sendMessage",
    data = props
  })
end 

exports('notify', notify)

RegisterNetEvent('rr_notify:notifyC')
AddEventHandler('rr_notify:notifyC', function(props)
  notify(props)
end)
