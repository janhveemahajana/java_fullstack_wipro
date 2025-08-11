package com.wipro.rider.dto;

import java.time.LocalDateTime;
import lombok.Data;

@Data
public class Ride {
	Integer id;
    String riderName;
    String pickup;
    String dropLocation;
    String status;
    LocalDateTime timestamp;
}
