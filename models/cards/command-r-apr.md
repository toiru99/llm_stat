---
type: Model
title: Command-R+ (Apr)
creator: Cohere
license: Open
intelligence_index: 3.0
price_blended_usd_1m: 4.2
output_speed_tps: None
context_window: 128000
status: past
size_class: Medium
params_b: 104
is_reasoning: false
radar:
  knowledge: { s: 17.7, z: -1.12, r: 33.1, estimated: false }  # 전문 지식
  reasoning: { s: 16.4, z: -0.91, r: 36.4, estimated: false }  # 추론
  coding: { s: 19.4, z: -1.16, r: 32.6, estimated: false }  # 코딩
  agentic: { s: 10.4, z: -1.04, r: 34.3, estimated: true }  # 에이전트
  trust: { s: 15.0, z: -0.44, r: 43.3, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 19.2, z: -0.94, r: 36.0, estimated: true }  # 긴문맥
  instruction: { s: 33.4, z: -0.81, r: 37.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Command-R+ (Apr)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-02
timestamp: 2026-09-02T00:00:00Z
---

# Command-R+ (Apr)

Cohere · Open · Medium(104B) · 컨텍스트 128k · 종합지능 **3.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 전문 지식, 코딩

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $4.2/1M · None t/s · TTFT Nones · 128k ctx` · 가성비 0.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 33.1 | -1.12 | 실측 | [[gpqa-diamond]] 32.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 36.4 | -0.91 | 실측 | [[gpqa-diamond]] 32.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 32.6 | -1.16 | 실측 | [[scicode]] 12.0%×1.0 |
| 에이전트 | 34.3 | -1.04 | 추정 | (추정) |
| 신뢰성 | 43.3 | -0.44 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 36.0 | -0.94 | 추정 | (추정) |
| 지시 따르기 | 37.9 | -0.81 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
