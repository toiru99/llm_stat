---
type: Model
title: Solar Pro 2 (Preview)
creator: Upstage
license: Proprietary
intelligence_index: 7.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 64000
status: past
size_class: Small
params_b: 30.9
is_reasoning: true
radar:
  knowledge: { s: 35.6, z: -0.26, r: 46.1, estimated: false }  # 전문 지식
  reasoning: { s: 32.2, z: -0.14, r: 48.0, estimated: false }  # 추론
  coding: { s: 29.2, z: -0.1, r: 48.4, estimated: true }  # 코딩
  agentic: { s: 40.0, z: 0.1, r: 51.5, estimated: true }  # 에이전트
  trust: { s: 12.4, z: -0.57, r: 41.4, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 41.9, z: -0.22, r: 46.7, estimated: true }  # 긴문맥
  instruction: { s: 63.7, z: 0.46, r: 56.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Solar Pro 2 (Preview)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Solar Pro 2 (Preview)

Upstage · Proprietary · Small(30.9B) · 컨텍스트 64k · 종합지능 **7.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 전문 지식, 신뢰성

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 64k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.1 | -0.26 | 실측 | [[gpqa-diamond]] 58.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 48.0 | -0.14 | 실측 | [[gpqa-diamond]] 58.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 48.4 | -0.1 | 추정 | (추정) |
| 에이전트 | 51.5 | +0.1 | 추정 | (추정) |
| 신뢰성 | 41.4 | -0.57 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 46.7 | -0.22 | 추정 | (추정) |
| 지시 따르기 | 56.8 | +0.46 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
