function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let ciddenom = [0.01, 0.05, 0.10, 0.25, 1, 5, 10, 20, 100]
  let coins = {status: 'OPEN', change: []}
  let cidcopy = JSON.parse(JSON.stringify(cid));
  
  function changeCalc(change, denom, amount) {
    let num = Math.floor(change / denom)
    if (num * denom < amount) {
      return [num, change % denom]}
      else {
        return [amount / denom, change - amount]
      }
  }

  for (let i = cid.length-1; i >= 0; i--) {
    if (ciddenom[i] > change) {
      continue
    }
    let changearr = changeCalc(change, ciddenom[i], cid[i][1])
    change = Math.round(changearr[1] * 100) / 100
    coins.change.push([cid[i][0], changearr[0] * ciddenom[i]])
    cidcopy[i][1] = cidcopy[i][1] - changearr[0] * ciddenom[i]
  }
  
  if (change > 0) {
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }
  for (let i = cid.length-1; i >= 0; i--) {
    if (cidcopy[i][1] !== 0) {
      return coins
    } else 
      continue
    }
  
  coins.status = 'CLOSED'
  coins.change = cid
  return coins
  }