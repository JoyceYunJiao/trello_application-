package group25.group25.board.serviceimpl;

import group25.group25.board.model.Board;
import group25.group25.board.repository.BoardRepository;
import group25.group25.board.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class BoardServiceimpl implements BoardService {

    @Autowired
    BoardRepository boardRepository;

    @Override

    public Board addBoard(Board board) {
       return boardRepository.save(board);
    }

    @Override
    public void deleteBoard(Board board) {
        boardRepository.delete(board);
    }


}
