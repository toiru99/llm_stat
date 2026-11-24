---
type: Model
title: GPT-6.1 Terra (max)
creator: OpenAI
license: Proprietary
intelligence_index: 51.3265188577015
price_blended_usd_1m: 0.735
output_speed_tps: 71.3978456984984
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 61.7, z: 0.73, r: 60.9, estimated: false }  # 전문 지식
  reasoning: { s: 70.1, z: 1.73, r: 76.0, estimated: false }  # 추론
  coding: { s: 79.2, z: 1.29, r: 69.3, estimated: false }  # 코딩
  agentic: { s: 82.8, z: 1.26, r: 68.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 93.6, z: 1.13, r: 67.0, estimated: false }  # 멀티모달
  long_context: { s: 93.2, z: 1.09, r: 66.3, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6.1 Terra (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# GPT-6.1 Terra (max)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **51.3265188577015**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 긴문맥, 전문 지식

## 실용 지표
`입력 $1.0 · 출력 $5.0 · 혼합 $0.735/1M · 71.3978456984984 t/s · TTFT 148.604655307292s · 1M ctx` · 가성비 69.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 60.9 | +0.73 | 실측 | [[humanitys-last-exam]] 46.2465%×0.3 |
| 추론 | 76.0 | +1.73 | 실측 | [[critpt]] 28%×1.0, [[humanitys-last-exam]] 46.2465%×1.0 |
| 코딩 | 69.3 | +1.29 | 실측 | [[scicode]] 55.0926%×1.0 |
| 에이전트 | 68.9 | +1.26 | 실측 | [[gdpval]] 1474.92 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 67.0 | +1.13 | 실측 | [[mmmu-pro]] 84.6821%×1.0 |
| 긴문맥 | 66.3 | +1.09 | 실측 | [[aa-lcr]] 82.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
