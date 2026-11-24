---
type: Model
title: Claude Opus 5 (low)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 3.85
output_speed_tps: 73.7306526750033
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 77.1, z: 1.47, r: 72.1, estimated: false }  # 전문 지식
  reasoning: { s: 71.4, z: 1.8, r: 77.0, estimated: false }  # 추론
  coding: { s: 69.5, z: 0.96, r: 64.4, estimated: false }  # 코딩
  agentic: { s: 67.1, z: 0.71, r: 60.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 87.1, z: 0.8, r: 62.0, estimated: false }  # 멀티모달
  long_context: { s: 91.7, z: 1.04, r: 65.6, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Claude Opus 5 (low)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 멀티모달, 에이전트

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 73.7306526750033 t/s · TTFT 3.27866790484169s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 72.1 | +1.47 | 실측 | [[gpqa-diamond]] 88.8889%×0.4, [[humanitys-last-exam]] 43.4198%×0.3 |
| 추론 | 77.0 | +1.8 | 실측 | [[critpt]] 23.1429%×1.0, [[gpqa-diamond]] 88.8889%×1.0, [[humanitys-last-exam]] 43.4198%×1.0 |
| 코딩 | 64.4 | +0.96 | 실측 | [[scicode]] 49.1898%×1.0 |
| 에이전트 | 60.6 | +0.71 | 실측 | [[gdpval]] 1307 Elo×1.0, [[tau3-banking]] 30.3093%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 62.0 | +0.8 | 실측 | [[mmmu-pro]] 79.8266%×1.0 |
| 긴문맥 | 65.6 | +1.04 | 실측 | [[aa-lcr]] 81.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
