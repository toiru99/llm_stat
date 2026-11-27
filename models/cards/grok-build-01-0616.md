---
type: Model
title: Grok Build 0.1 0616
creator: SpaceXAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 74.5, z: 1.35, r: 70.2, estimated: false }  # 전문 지식
  reasoning: { s: 56.2, z: 1.05, r: 65.7, estimated: false }  # 추론
  coding: { s: null, z: null, r: null, estimated: false }  # 코딩
  agentic: { s: 45.4, z: -0.06, r: 49.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 82.7, z: 0.58, r: 58.7, estimated: false }  # 멀티모달
  long_context: { s: 84.2, z: 0.81, r: 62.2, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok Build 0.1 0616
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Grok Build 0.1 0616

SpaceXAI · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 멀티모달, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 70.2 | +1.35 | 실측 | [[gpqa-diamond]] 89.4949%×0.4, [[humanitys-last-exam]] 38.2762%×0.3 |
| 추론 | 65.7 | +1.05 | 실측 | [[critpt]] 9.14286%×1.0, [[gpqa-diamond]] 89.4949%×1.0, [[humanitys-last-exam]] 38.2762%×1.0 |
| 코딩 | — | — | 측정 안 됨 | — |
| 에이전트 | 49.1 | -0.06 | 실측 | [[gdpval]] 1071.64 Elo×1.0, [[tau3-banking]] 13.4021%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 58.7 | +0.58 | 실측 | [[mmmu-pro]] 76.5318%×1.0 |
| 긴문맥 | 62.2 | +0.81 | 실측 | [[aa-lcr]] 74.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
