---
type: Model
title: GPT-6.1 Terra (low)
creator: OpenAI
license: Proprietary
intelligence_index: 29.4169280792131
price_blended_usd_1m: 0.735
output_speed_tps: 61.3212153718227
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 47.5, z: 0.03, r: 50.5, estimated: false }  # 전문 지식
  reasoning: { s: 44.9, z: 0.49, r: 57.3, estimated: false }  # 추론
  coding: { s: 74.9, z: 1.14, r: 67.1, estimated: false }  # 코딩
  agentic: { s: 70.8, z: 0.84, r: 62.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 90.7, z: 0.98, r: 64.8, estimated: false }  # 멀티모달
  long_context: { s: 91.4, z: 1.03, r: 65.5, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6.1 Terra (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# GPT-6.1 Terra (low)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **29.4169280792131**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $1.0 · 출력 $5.0 · 혼합 $0.735/1M · 61.3212153718227 t/s · TTFT 2.79945408559372s · 1M ctx` · 가성비 40.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 50.5 | +0.03 | 실측 | [[humanitys-last-exam]] 35.8202%×0.3 |
| 추론 | 57.3 | +0.49 | 실측 | [[critpt]] 15.1429%×1.0, [[humanitys-last-exam]] 35.8202%×1.0 |
| 코딩 | 67.1 | +1.14 | 실측 | [[scicode]] 52.4306%×1.0 |
| 에이전트 | 62.6 | +0.84 | 실측 | [[gdpval]] 1204.89 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 64.8 | +0.98 | 실측 | [[mmmu-pro]] 82.4855%×1.0 |
| 긴문맥 | 65.5 | +1.03 | 실측 | [[aa-lcr]] 81%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
