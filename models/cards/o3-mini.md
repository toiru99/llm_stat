---
type: Model
title: o3-mini
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.045
output_speed_tps: None
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 46.9, z: -0.0, r: 50.0, estimated: false }  # 전문 지식
  reasoning: { s: 42.2, z: -0.05, r: 49.3, estimated: false }  # 추론
  coding: { s: 10.3, z: -0.92, r: 36.2, estimated: false }  # 코딩
  agentic: { s: 10.3, z: -0.83, r: 37.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 43.3, z: -0.29, r: 45.6, estimated: true }  # 긴문맥
  instruction: { s: 35.9, z: -0.73, r: 39.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — o3-mini
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-11
timestamp: 2026-11-11T00:00:00Z
---

# o3-mini

OpenAI · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $1.1 · 출력 $4.4 · 혼합 $1.045/1M · None t/s · TTFT Nones · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.0 | +-0.0 | 실측 | [[gpqa-diamond]] 74.8%×0.4, [[humanitys-last-exam]] 7.9%×0.3 |
| 추론 | 49.3 | -0.05 | 실측 | [[gpqa-diamond]] 74.8%×1.0, [[humanitys-last-exam]] 7.9%×1.0 |
| 코딩 | 36.2 | -0.92 | 실측 | [[terminal-bench]] 6.8%×0.5 |
| 에이전트 | 37.5 | -0.83 | 실측 | [[terminal-bench]] 6.8%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 45.6 | -0.29 | 추정 | (추정) |
| 지시 따르기 | 39.1 | -0.73 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
