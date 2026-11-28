---
type: Model
title: DeepSeek V4.1 Flash 1017 (non-reasoning)
creator: DeepSeek
license: Open
intelligence_index: 18.5131594039446
price_blended_usd_1m: 0.1842
output_speed_tps: 167.484406033573
context_window: 1000000
status: current
size_class: Large
params_b: 552
is_reasoning: false
radar:
  knowledge: { s: 14.3, z: -1.58, r: 26.3, estimated: false }  # 전문 지식
  reasoning: { s: 7.6, z: -1.37, r: 29.4, estimated: false }  # 추론
  coding: { s: 52.0, z: 0.37, r: 55.5, estimated: false }  # 코딩
  agentic: { s: 75.8, z: 1.01, r: 65.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 72.9, z: 0.08, r: 51.2, estimated: false }  # 멀티모달
  long_context: { s: 64.7, z: 0.21, r: 53.2, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4.1 Flash 1017 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# DeepSeek V4.1 Flash 1017 (non-reasoning)

DeepSeek · Open · Large(552B) · 컨텍스트 1M · 종합지능 **18.5131594039446**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.1842/1M · 167.484406033573 t/s · TTFT 1.05300198571198s · 1M ctx` · 가성비 100.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 26.3 | -1.58 | 실측 | [[humanitys-last-exam]] 11.5385%×0.3 |
| 추론 | 29.4 | -1.37 | 실측 | [[critpt]] 0.285714%×1.0, [[humanitys-last-exam]] 11.5385%×1.0 |
| 코딩 | 55.5 | +0.37 | 실측 | [[scicode]] 38.5417%×1.0 |
| 에이전트 | 65.1 | +1.01 | 실측 | [[gdpval]] 1316.51 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 51.2 | +0.08 | 실측 | [[mmmu-pro]] 69.1908%×1.0 |
| 긴문맥 | 53.2 | +0.21 | 실측 | [[aa-lcr]] 57.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
