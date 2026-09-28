---
type: Model
title: Solar Pro 2 (Preview)
creator: Upstage
license: Proprietary
intelligence_index: 9.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 64000
status: past
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 35.5, z: -0.29, r: 45.6, estimated: false }  # 전문 지식
  reasoning: { s: 32.1, z: -0.16, r: 47.5, estimated: false }  # 추론
  coding: { s: 33.3, z: -0.06, r: 49.1, estimated: true }  # 코딩
  agentic: { s: 30.0, z: -0.3, r: 45.5, estimated: true }  # 에이전트
  trust: { s: 20.7, z: -0.23, r: 46.5, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 36.7, z: -0.43, r: 43.6, estimated: true }  # 긴문맥
  instruction: { s: 67.1, z: 0.56, r: 58.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Solar Pro 2 (Preview)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-28
timestamp: 2026-09-28T00:00:00Z
---

# Solar Pro 2 (Preview)

Upstage · Proprietary · Unknown · 컨텍스트 64k · 종합지능 **9.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 코딩
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 64k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.6 | -0.29 | 실측 | [[gpqa-diamond]] 58.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 47.5 | -0.16 | 실측 | [[gpqa-diamond]] 58.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 49.1 | -0.06 | 추정 | (추정) |
| 에이전트 | 45.5 | -0.3 | 추정 | (추정) |
| 신뢰성 | 46.5 | -0.23 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 43.6 | -0.43 | 추정 | (추정) |
| 지시 따르기 | 58.4 | +0.56 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
