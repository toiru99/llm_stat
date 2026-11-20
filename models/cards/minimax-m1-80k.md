---
type: Model
title: MiniMax M1 80k
creator: MiniMax
license: Open
intelligence_index: None
price_blended_usd_1m: 0.715
output_speed_tps: 49.5536337975649
context_window: 1000000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 44.2, z: -0.15, r: 47.7, estimated: false }  # 전문 지식
  reasoning: { s: 26.7, z: -0.44, r: 43.4, estimated: false }  # 추론
  coding: { s: 4.6, z: -1.2, r: 32.0, estimated: false }  # 코딩
  agentic: { s: 19.6, z: -0.88, r: 36.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 65.0, z: 0.34, r: 55.1, estimated: false }  # 긴문맥
  instruction: { s: 41.6, z: -0.51, r: 42.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniMax M1 80k
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-20
timestamp: 2026-11-20T00:00:00Z
---

# MiniMax M1 80k

MiniMax · Open · Large · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.55 · 출력 $2.2 · 혼합 $0.715/1M · 49.5536337975649 t/s · TTFT 4.04659026894725s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.7 | -0.15 | 실측 | [[gpqa-diamond]] 69.6969696969697%×0.4, [[humanitys-last-exam]] 8.89712696941613%×0.3 |
| 추론 | 43.4 | -0.44 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 69.6969696969697%×1.0, [[humanitys-last-exam]] 8.89712696941613%×1.0 |
| 코딩 | 32.0 | -1.2 | 실측 | [[terminal-bench]] 3.03030303030303%×0.5 |
| 에이전트 | 36.9 | -0.88 | 실측 | [[tau2-bench]] 34.2105263157895%×1.0, [[terminal-bench]] 3.03030303030303%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 55.1 | +0.34 | 실측 | [[aa-lcr]] 57.6666666666667%×1.0 |
| 지시 따르기 | 42.3 | -0.51 | 실측 | [[ifbench]] 41.7687074829932%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
