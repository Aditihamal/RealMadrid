function handleSubmit(event) {
    event.preventDefault(); 
    
    
    const seatNumberInput = document.getElementById('seatNumber');
    const seatNumber = seatNumberInput.value;
    
    
    alert(`Booking ${seatNumber} seat(s).`);
    
    event.target.reset();
  }
  