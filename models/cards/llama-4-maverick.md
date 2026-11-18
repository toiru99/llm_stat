---
type: Model
title: Llama 4 Maverick
creator: Meta
license: Open
intelligence_index: None
price_blended_usd_1m: 0.315
output_speed_tps: 68.41678728244919
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 40.1, z: -0.35, r: 44.8, estimated: false }  # 전문 지식
  reasoning: { s: 23.8, z: -0.58, r: 41.3, estimated: false }  # 추론
  coding: { s: 30.6, z: -0.32, r: 45.2, estimated: false }  # 코딩
  agentic: { s: 10.3, z: -1.2, r: 32.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 63.5, z: -0.4, r: 44.0, estimated: false }  # 멀티모달
  long_context: { s: 56.4, z: 0.08, r: 51.2, estimated: false }  # 긴문맥
  instruction: { s: 43.4, z: -0.44, r: 43.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 4 Maverick
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# Llama 4 Maverick

Meta · Open · Large · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $0.25 · 출력 $0.97 · 혼합 $0.315/1M · 68.41678728244919 t/s · TTFT 1.2766838825050992s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.8 | -0.35 | 실측 | [[gpqa-diamond]] 67.0707070707071%×0.4, [[humanitys-last-exam]] 4.91195551436515%×0.3 |
| 추론 | 41.3 | -0.58 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 67.0707070707071%×1.0, [[humanitys-last-exam]] 4.91195551436515%×1.0 |
| 코딩 | 45.2 | -0.32 | 실측 | [[scicode]] 31.712962962962997%×1.0, [[terminal-bench]] 6.81818181818182%×0.5 |
| 에이전트 | 32.1 | -1.2 | 실측 | [[gdpval]] -268.12%×1.0, [[tau2-bench]] 17.8362573099415%×1.0, [[tau3-banking]] 3.71134020618557%×1.0, [[terminal-bench]] 6.81818181818182%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 44.0 | -0.4 | 실측 | [[mmmu-pro]] 62.1387283236994%×1.0 |
| 긴문맥 | 51.2 | +0.08 | 실측 | [[aa-lcr]] 50.0%×1.0 |
| 지시 따르기 | 43.4 | -0.44 | 실측 | [[ifbench]] 42.9931972789116%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
