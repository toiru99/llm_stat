---
type: Model
title: DeepSeek V4.1 Flash 1017 (max)
creator: DeepSeek
license: Open
intelligence_index: 32.5896393532027
price_blended_usd_1m: 0.1842
output_speed_tps: 167.233810290598
context_window: 1000000
status: current
size_class: Large
params_b: 552
is_reasoning: true
radar:
  knowledge: { s: 57.7, z: 0.53, r: 58.0, estimated: false }  # 전문 지식
  reasoning: { s: 62.5, z: 1.36, r: 70.3, estimated: false }  # 추론
  coding: { s: 80.6, z: 1.33, r: 70.0, estimated: false }  # 코딩
  agentic: { s: 94.7, z: 1.68, r: 75.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 88.2, z: 0.86, r: 62.9, estimated: false }  # 멀티모달
  long_context: { s: 93.2, z: 1.09, r: 66.3, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4.1 Flash 1017 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# DeepSeek V4.1 Flash 1017 (max)

DeepSeek · Open · Large(552B) · 컨텍스트 1M · 종합지능 **32.5896393532027**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 추론
- **약점**: 멀티모달, 전문 지식

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.1842/1M · 167.233810290598 t/s · TTFT 1.27090751134488s · 1M ctx` · 가성비 176.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 58.0 | +0.53 | 실측 | [[humanitys-last-exam]] 43.3272%×0.3 |
| 추론 | 70.3 | +1.36 | 실측 | [[critpt]] 24%×1.0, [[humanitys-last-exam]] 43.3272%×1.0 |
| 코딩 | 70.0 | +1.33 | 실측 | [[scicode]] 55.9028%×1.0 |
| 에이전트 | 75.2 | +1.68 | 실측 | [[gdpval]] 1745.77 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 62.9 | +0.86 | 실측 | [[mmmu-pro]] 80.6358%×1.0 |
| 긴문맥 | 66.3 | +1.09 | 실측 | [[aa-lcr]] 82.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
