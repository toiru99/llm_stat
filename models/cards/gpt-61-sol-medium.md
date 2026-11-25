---
type: Model
title: GPT-6.1 Sol (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 46.3468797067114
price_blended_usd_1m: 1.47
output_speed_tps: 50.8829673516006
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 66.6, z: 0.97, r: 64.5, estimated: false }  # 전문 지식
  reasoning: { s: 72.1, z: 1.84, r: 77.6, estimated: false }  # 추론
  coding: { s: 76.2, z: 1.18, r: 67.8, estimated: false }  # 코딩
  agentic: { s: 82.3, z: 1.24, r: 68.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 92.6, z: 1.08, r: 66.2, estimated: false }  # 멀티모달
  long_context: { s: 94.0, z: 1.11, r: 66.7, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6.1 Sol (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# GPT-6.1 Sol (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **46.3468797067114** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 멀티모달, 전문 지식

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.47/1M · 50.8829673516006 t/s · TTFT 4.51956011767502s · 1M ctx` · 가성비 31.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 64.5 | +0.97 | 실측 | [[humanitys-last-exam]] 49.861%×0.3 |
| 추론 | 77.6 | +1.84 | 실측 | [[critpt]] 27.7143%×1.0, [[humanitys-last-exam]] 49.861%×1.0 |
| 코딩 | 67.8 | +1.18 | 실측 | [[scicode]] 53.2407%×1.0 |
| 에이전트 | 68.6 | +1.24 | 실측 | [[gdpval]] 1463.95 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 66.2 | +1.08 | 실측 | [[mmmu-pro]] 83.9306%×1.0 |
| 긴문맥 | 66.7 | +1.11 | 실측 | [[aa-lcr]] 83.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
