package github.seulgi.boardservice.domain.board.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/boards")
public class BoardController {

    @GetMapping("list2")
    public String list2(HttpServletRequest request) {
        int port = request.getServerPort();
        log.info("port = {}", port);
        return String.format("[Member Service] port = %d", request.getServerPort());
    }

    @GetMapping("/list")
    public ResponseEntity<List<Map<String, Object>>> getList() {
        List<Map<String, Object>> responseData = new ArrayList<>();

        Map<String, Object> itemData = new HashMap<>();
        itemData.put("name", "리니");
        itemData.put("description", "쮸디바보");
        responseData.add(itemData);

        return ResponseEntity.ok().body(responseData);
    }

}
