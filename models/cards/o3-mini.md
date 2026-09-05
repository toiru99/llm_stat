---
type: Model
title: o3-mini
creator: OpenAI
license: Proprietary
intelligence_index: 13.0
price_blended_usd_1m: 1.045
output_speed_tps: 203.0
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 48.4, z: 0.36, r: 55.4, estimated: false }  # 전문 지식
  reasoning: { s: 43.8, z: 0.42, r: 56.3, estimated: false }  # 추론
  coding: { s: 10.6, z: -0.75, r: 38.7, estimated: false }  # 코딩
  agentic: { s: 19.9, z: -0.67, r: 39.9, estimated: false }  # 에이전트
  trust: { s: 8.2, z: -0.76, r: 38.5, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 56.9, z: 0.24, r: 53.6, estimated: true }  # 긴문맥
  instruction: { s: 47.9, z: -0.2, r: 47.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — o3-mini
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# o3-mini

OpenAI · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **13.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 코딩, 신뢰성

## 실용 지표
`입력 $1.1 · 출력 $4.4 · 혼합 $1.045/1M · 203.0 t/s · TTFT 6.07s · 200k ctx` · 가성비 12.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.4 | +0.36 | 실측 | [[gpqa-diamond]] 75.0%×0.4, [[humanitys-last-exam]] 8.0%×0.3 |
| 추론 | 56.3 | +0.42 | 실측 | [[gpqa-diamond]] 75.0%×1.0, [[humanitys-last-exam]] 8.0%×1.0 |
| 코딩 | 38.7 | -0.75 | 실측 | [[terminal-bench]] 7.0%×0.5 |
| 에이전트 | 39.9 | -0.67 | 실측 | [[tau2-bench]] 29.0%×1.0, [[terminal-bench]] 7.0%×1.0 |
| 신뢰성 | 38.5 | -0.76 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 53.6 | +0.24 | 추정 | (추정) |
| 지시 따르기 | 47.1 | -0.2 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
