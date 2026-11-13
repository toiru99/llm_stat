---
type: Model
title: Trinity Large Thinking
creator: Arcee AI
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 512000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 51.8, z: 0.23, r: 53.4, estimated: false }  # 전문 지식
  reasoning: { s: 47.8, z: 0.22, r: 53.3, estimated: false }  # 추론
  coding: { s: 48.4, z: 0.35, r: 55.3, estimated: false }  # 코딩
  agentic: { s: 21.3, z: -0.46, r: 43.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 42.8, z: -0.31, r: 45.4, estimated: false }  # 긴문맥
  instruction: { s: 62.1, z: 0.39, r: 55.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Trinity Large Thinking
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-13
timestamp: 2026-11-13T00:00:00Z
---

# Trinity Large Thinking

Arcee AI · Open · Large · 컨텍스트 512k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 코딩
- **약점**: 긴문맥, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 512k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.4 | +0.23 | 실측 | [[gpqa-diamond]] 75.2%×0.4, [[humanitys-last-exam]] 15.8%×0.3 |
| 추론 | 53.3 | +0.22 | 실측 | [[gpqa-diamond]] 75.2%×1.0, [[humanitys-last-exam]] 15.8%×1.0 |
| 코딩 | 55.3 | +0.35 | 실측 | [[scicode]] 40.6%×1.0, [[terminal-bench]] 22.7%×0.5 |
| 에이전트 | 43.0 | -0.46 | 실측 | [[gdpval]] 344.0%×1.0, [[tau3-banking]] 5.8%×1.0, [[terminal-bench]] 22.7%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 45.4 | -0.31 | 실측 | [[aa-lcr]] 38.0%×1.0 |
| 지시 따르기 | 55.8 | +0.39 | 실측 | [[ifbench]] 56.3%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
