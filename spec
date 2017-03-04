model

WinNumber
  defaults: 'winNumber':[]

Collection

winnumbercollection
initialize: if winNuber already in storage and is not expired use it
            else generate new one
genWinNumber: generate winNumber and return
isExpired: check winNumber expiration
exists: check if there is saved winNumber


template

WinNumberTemplate
IndexTemplate

view

WinNumberView
  el:
  template: WinNumberTemplate
  initialize: remove index view and append WinNumberView
  render: return this

IndexView
  el:
  template: IndexTemplate
  events,
  initialize: remove winNumberView and append IndexView
  render: return this

  AppView
    el,
    initialize,
    events
    renderWinNumber,
    renderIndex

router

  Router
