---
type: Model
title: GLM-4.7
creator: Z AI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.512
output_speed_tps: None
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 65.7, z: 0.91, r: 63.6, estimated: false }  # 전문 지식
  reasoning: { s: 62.0, z: 0.92, r: 63.8, estimated: false }  # 추론
  coding: { s: 48.3, z: 0.36, r: 55.3, estimated: false }  # 코딩
  agentic: { s: 42.1, z: 0.25, r: 53.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 80.0, z: 0.81, r: 62.2, estimated: false }  # 긴문맥
  instruction: { s: 78.4, z: 1.1, r: 66.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-4.7
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-12
timestamp: 2026-11-12T00:00:00Z
---

# GLM-4.7

Z AI · Open · Unknown · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $0.53 · 출력 $2.1 · 혼합 $0.512/1M · None t/s · TTFT Nones · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 63.6 | +0.91 | 실측 | [[gpqa-diamond]] 85.9%×0.4, [[humanitys-last-exam]] 27.4%×0.3 |
| 추론 | 63.8 | +0.92 | 실측 | [[gpqa-diamond]] 85.9%×1.0, [[humanitys-last-exam]] 27.4%×1.0 |
| 코딩 | 55.3 | +0.36 | 실측 | [[terminal-bench]] 31.8%×0.5 |
| 에이전트 | 53.7 | +0.25 | 실측 | [[gdpval]] 1021.0%×1.0, [[tau3-banking]] 12.2%×1.0, [[terminal-bench]] 31.8%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 62.2 | +0.81 | 실측 | [[aa-lcr]] 71.0%×1.0 |
| 지시 따르기 | 66.5 | +1.1 | 실측 | [[ifbench]] 67.9%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
