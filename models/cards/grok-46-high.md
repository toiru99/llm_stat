---
type: Model
title: Grok 4.6 (high)
creator: SpaceXAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.35
output_speed_tps: 77.0667072563589
context_window: 500000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 80.8, z: 1.65, r: 74.8, estimated: false }  # 전문 지식
  reasoning: { s: 67.9, z: 1.63, r: 74.4, estimated: false }  # 추론
  coding: { s: 81.5, z: 1.36, r: 70.5, estimated: false }  # 코딩
  agentic: { s: 94.1, z: 1.66, r: 74.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 90.6, z: 1.01, r: 65.1, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.6 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Grok 4.6 (high)

SpaceXAI · Proprietary · Unknown · 컨텍스트 500k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.35/1M · 77.0667072563589 t/s · TTFT 17.9053459091167s · 500k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 74.8 | +1.65 | 실측 | [[gpqa-diamond]] 94.9495%×0.4, [[humanitys-last-exam]] 42.9101%×0.3 |
| 추론 | 74.4 | +1.63 | 실측 | [[critpt]] 17.1429%×1.0, [[gpqa-diamond]] 94.9495%×1.0, [[humanitys-last-exam]] 42.9101%×1.0 |
| 코딩 | 70.5 | +1.36 | 실측 | [[scicode]] 56.4815%×1.0 |
| 에이전트 | 74.9 | +1.66 | 실측 | [[gdpval]] 1627.03 Elo×1.0, [[tau3-banking]] 50.7216%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.1 | +1.01 | 실측 | [[aa-lcr]] 80.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
