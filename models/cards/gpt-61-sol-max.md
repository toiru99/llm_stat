---
type: Model
title: GPT-6.1 Sol (max)
creator: OpenAI
license: Proprietary
intelligence_index: 54.6592388643199
price_blended_usd_1m: 1.47
output_speed_tps: 44.6222390560005
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 70.8, z: 1.17, r: 67.5, estimated: false }  # 전문 지식
  reasoning: { s: 79.8, z: 2.22, r: 83.3, estimated: false }  # 추론
  coding: { s: 77.7, z: 1.24, r: 68.5, estimated: false }  # 코딩
  agentic: { s: 88.6, z: 1.46, r: 71.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 95.3, z: 1.22, r: 68.3, estimated: false }  # 멀티모달
  long_context: { s: 93.6, z: 1.1, r: 66.5, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6.1 Sol (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# GPT-6.1 Sol (max)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **54.6592388643199** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 전문 지식, 긴문맥

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.47/1M · 44.6222390560005 t/s · TTFT 141.0323471489s · 1M ctx` · 가성비 37.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 67.5 | +1.17 | 실측 | [[humanitys-last-exam]] 52.9194%×0.3 |
| 추론 | 83.3 | +2.22 | 실측 | [[critpt]] 31.7143%×1.0, [[humanitys-last-exam]] 52.9194%×1.0 |
| 코딩 | 68.5 | +1.24 | 실측 | [[scicode]] 54.1667%×1.0 |
| 에이전트 | 71.9 | +1.46 | 실측 | [[gdpval]] 1607.38 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 68.3 | +1.22 | 실측 | [[mmmu-pro]] 85.9538%×1.0 |
| 긴문맥 | 66.5 | +1.1 | 실측 | [[aa-lcr]] 83%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
