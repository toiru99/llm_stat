---
type: Model
title: Llama 3.1 8B
creator: Meta
license: Open
intelligence_index: None
price_blended_usd_1m: 0.038
output_speed_tps: 117.38286088583523
context_window: 128000
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 13.1, z: -1.65, r: 25.2, estimated: false }  # 전문 지식
  reasoning: { s: 8.1, z: -1.35, r: 29.7, estimated: false }  # 추론
  coding: { s: 1.1, z: -1.32, r: 30.2, estimated: false }  # 코딩
  agentic: { s: 6.2, z: -1.34, r: 30.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 20.3, z: -0.99, r: 35.2, estimated: false }  # 긴문맥
  instruction: { s: 23.1, z: -1.29, r: 30.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 3.1 8B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# Llama 3.1 8B

Meta · Open · Small · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.035 · 출력 $0.065 · 혼합 $0.038/1M · 117.38286088583523 t/s · TTFT 1.5687986343532931s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 25.2 | -1.65 | 실측 | [[gpqa-diamond]] 25.858585858585897%×0.4, [[humanitys-last-exam]] 5.29%×0.3 |
| 추론 | 29.7 | -1.35 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 25.858585858585897%×1.0, [[humanitys-last-exam]] 5.29%×1.0 |
| 코딩 | 30.2 | -1.32 | 실측 | [[terminal-bench]] 0.757575757575758%×0.5 |
| 에이전트 | 30.0 | -1.34 | 실측 | [[gdpval]] -379.63%×1.0, [[tau2-bench]] 16.374269005848%×1.0, [[terminal-bench]] 0.757575757575758%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 35.2 | -0.99 | 실측 | [[aa-lcr]] 18.0%×1.0 |
| 지시 따르기 | 30.7 | -1.29 | 실측 | [[ifbench]] 28.571428571428598%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
