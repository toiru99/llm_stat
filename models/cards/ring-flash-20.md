---
type: Model
title: Ring-flash-2.0
creator: InclusionAI
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Medium
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 46.5, z: -0.04, r: 49.4, estimated: false }  # 전문 지식
  reasoning: { s: 28.3, z: -0.36, r: 44.6, estimated: false }  # 추론
  coding: { s: 11.5, z: -0.97, r: 35.5, estimated: false }  # 코딩
  agentic: { s: 5.7, z: -1.35, r: 29.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 23.7, z: -0.89, r: 36.7, estimated: false }  # 긴문맥
  instruction: { s: 43.7, z: -0.42, r: 43.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ring-flash-2.0
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-19
timestamp: 2026-11-19T00:00:00Z
---

# Ring-flash-2.0

InclusionAI · Open · Medium · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.4 | -0.04 | 실측 | [[gpqa-diamond]] 72.5252525252525%×0.4, [[humanitys-last-exam]] 9.63855421686747%×0.3 |
| 추론 | 44.6 | -0.36 | 실측 | [[critpt]] 0.27755102040816304%×1.0, [[gpqa-diamond]] 72.5252525252525%×1.0, [[humanitys-last-exam]] 9.63855421686747%×1.0 |
| 코딩 | 35.5 | -0.97 | 실측 | [[terminal-bench]] 7.57575757575758%×0.5 |
| 에이전트 | 29.7 | -1.35 | 실측 | [[tau2-bench]] 0.0%×1.0, [[terminal-bench]] 7.57575757575758%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 36.7 | -0.89 | 실측 | [[aa-lcr]] 21.0%×1.0 |
| 지시 따르기 | 43.6 | -0.42 | 실측 | [[ifbench]] 43.265306122449%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
