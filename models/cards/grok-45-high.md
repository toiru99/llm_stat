---
type: Model
title: Grok 4.5 (high)
creator: SpaceXAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.21
output_speed_tps: 78.5884610881641
context_window: 500000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 79.4, z: 1.59, r: 73.8, estimated: false }  # 전문 지식
  reasoning: { s: 65.5, z: 1.51, r: 72.6, estimated: false }  # 추론
  coding: { s: 79.0, z: 1.28, r: 69.2, estimated: false }  # 코딩
  agentic: { s: 80.4, z: 1.17, r: 67.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 87.9, z: 0.84, r: 62.6, estimated: false }  # 멀티모달
  long_context: { s: 89.5, z: 0.97, r: 64.6, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.5 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Grok 4.5 (high)

SpaceXAI · Proprietary · Unknown · 컨텍스트 500k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.21/1M · 78.5884610881641 t/s · TTFT 7.63781597323332s · 500k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 73.8 | +1.59 | 실측 | [[gpqa-diamond]] 93.1313%×0.4, [[humanitys-last-exam]] 42.6784%×0.3 |
| 추론 | 72.6 | +1.51 | 실측 | [[critpt]] 15.4286%×1.0, [[gpqa-diamond]] 93.1313%×1.0, [[humanitys-last-exam]] 42.6784%×1.0 |
| 코딩 | 69.2 | +1.28 | 실측 | [[scicode]] 54.9769%×1.0 |
| 에이전트 | 67.6 | +1.17 | 실측 | [[gdpval]] 1388.37 Elo×1.0, [[tau3-banking]] 42.0619%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 62.6 | +0.84 | 실측 | [[mmmu-pro]] 80.4046%×1.0 |
| 긴문맥 | 64.6 | +0.97 | 실측 | [[aa-lcr]] 79.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
