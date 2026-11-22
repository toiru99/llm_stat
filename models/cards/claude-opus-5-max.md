---
type: Model
title: Claude Opus 5 (max)
creator: Anthropic
license: Proprietary
intelligence_index: 44.1646231569372
price_blended_usd_1m: 3.85
output_speed_tps: 79.1410802364382
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 86.6, z: 1.9, r: 78.4, estimated: false }  # 전문 지식
  reasoning: { s: 83.9, z: 2.38, r: 85.7, estimated: false }  # 추론
  coding: { s: 81.3, z: 1.4, r: 71.0, estimated: false }  # 코딩
  agentic: { s: 87.9, z: 1.49, r: 72.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 93.7, z: 1.14, r: 67.1, estimated: false }  # 멀티모달
  long_context: { s: 89.5, z: 1.06, r: 65.9, estimated: false }  # 긴문맥
  instruction: { s: 82.8, z: 1.21, r: 68.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-22
timestamp: 2026-11-22T00:00:00Z
---

# Claude Opus 5 (max)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **44.1646231569372** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 멀티모달, 긴문맥

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 79.1410802364382 t/s · TTFT 21.8871342215445s · 1M ctx` · 가성비 11.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 78.4 | +1.9 | 실측 | [[gpqa-diamond]] 93.2323232323232%×0.4, [[humanitys-last-exam]] 54.8656163113994%×0.3 |
| 추론 | 85.7 | +2.38 | 실측 | [[critpt]] 29.1428571428571%×1.0, [[gpqa-diamond]] 93.2323232323232%×1.0, [[humanitys-last-exam]] 54.8656163113994%×1.0 |
| 코딩 | 71.0 | +1.4 | 실측 | [[scicode]] 56.3657407407407%×1.0 |
| 에이전트 | 72.3 | +1.49 | 실측 | [[gdpval]] 1729.0%×1.0, [[tau3-banking]] 42.0618556701031%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 67.1 | +1.14 | 실측 | [[mmmu-pro]] 84.7398843930636%×1.0 |
| 긴문맥 | 65.9 | +1.06 | 실측 | [[aa-lcr]] 79.3333333333333%×1.0 |
| 지시 따르기 | 68.1 | +1.21 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
