---
type: Model
title: DeepSeek V4 Flash (high)
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: 0.0622
output_speed_tps: None
context_window: 1000000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 67.9, z: 0.99, r: 64.9, estimated: false }  # 전문 지식
  reasoning: { s: 46.1, z: 0.52, r: 57.8, estimated: false }  # 추론
  coding: { s: 56.0, z: 0.54, r: 58.1, estimated: false }  # 코딩
  agentic: { s: 67.0, z: 0.77, r: 61.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 81.2, z: 0.82, r: 62.3, estimated: false }  # 긴문맥
  instruction: { s: 86.2, z: 1.35, r: 70.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Flash (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-20
timestamp: 2026-11-20T00:00:00Z
---

# DeepSeek V4 Flash (high)

DeepSeek · Open · Large · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 코딩, 추론

## 실용 지표
`입력 $0.1119 · 출력 $0.2338 · 혼합 $0.0622/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 64.9 | +0.99 | 실측 | [[gpqa-diamond]] 86.6666666666667%×0.4, [[humanitys-last-exam]] 30.259499536607997%×0.3 |
| 추론 | 57.8 | +0.52 | 실측 | [[critpt]] 3.42857142857143%×1.0, [[gpqa-diamond]] 86.6666666666667%×1.0, [[humanitys-last-exam]] 30.259499536607997%×1.0 |
| 코딩 | 58.1 | +0.54 | 실측 | [[scicode]] 40.162037037037%×1.0, [[terminal-bench]] 38.636363636363605%×0.5 |
| 에이전트 | 61.5 | +0.77 | 실측 | [[gdpval]] 1009.07%×1.0, [[tau2-bench]] 95.6140350877193%×1.0, [[tau3-banking]] 26.185567010309303%×1.0, [[terminal-bench]] 38.636363636363605%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 62.3 | +0.82 | 실측 | [[aa-lcr]] 72.0%×1.0 |
| 지시 따르기 | 70.3 | +1.35 | 실측 | [[ifbench]] 73.4693877551021%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
