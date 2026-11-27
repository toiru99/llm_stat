---
type: Model
title: K-EXAONE 2.0
creator: LG AI Research
license: Open
intelligence_index: 7.56357436827474
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262144
status: current
size_class: Large
params_b: 750
is_reasoning: true
radar:
  knowledge: { s: 58.6, z: 0.57, r: 58.6, estimated: false }  # 전문 지식
  reasoning: { s: 37.0, z: 0.09, r: 51.3, estimated: false }  # 추론
  coding: { s: 57.7, z: 0.56, r: 58.4, estimated: false }  # 코딩
  agentic: { s: 37.9, z: -0.32, r: 45.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 67.7, z: 0.31, r: 54.6, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — K-EXAONE 2.0
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# K-EXAONE 2.0

LG AI Research · Open · Large(750B) · 컨텍스트 262k · 종합지능 **7.56357436827474**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 58.6 | +0.57 | 실측 | [[gpqa-diamond]] 82.9293%×0.4, [[humanitys-last-exam]] 18.582%×0.3 |
| 추론 | 51.3 | +0.09 | 실측 | [[critpt]] 0.857143%×1.0, [[gpqa-diamond]] 82.9293%×1.0, [[humanitys-last-exam]] 18.582%×1.0 |
| 코딩 | 58.4 | +0.56 | 실측 | [[scicode]] 42.0139%×1.0 |
| 에이전트 | 45.1 | -0.32 | 실측 | [[gdpval]] 816.11 Elo×1.0, [[tau3-banking]] 11.5464%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 54.6 | +0.31 | 실측 | [[aa-lcr]] 60%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
