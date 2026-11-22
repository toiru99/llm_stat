---
type: Model
title: Kimi K2
creator: Kimi
license: Open
intelligence_index: None
price_blended_usd_1m: 0.743
output_speed_tps: 43.4026026483371
context_window: 128000
status: past
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 47.8, z: 0.02, r: 50.4, estimated: false }  # 전문 지식
  reasoning: { s: 28.6, z: -0.34, r: 44.8, estimated: false }  # 추론
  coding: { s: 24.1, z: -0.54, r: 41.9, estimated: false }  # 코딩
  agentic: { s: 42.9, z: -0.07, r: 49.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 59.8, z: 0.18, r: 52.7, estimated: false }  # 긴문맥
  instruction: { s: 41.3, z: -0.53, r: 42.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-22
timestamp: 2026-11-22T00:00:00Z
---

# Kimi K2

Kimi · Open · Large · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 지시 따르기, 코딩

## 실용 지표
`입력 $0.57 · 출력 $2.3 · 혼합 $0.743/1M · 43.4026026483371 t/s · TTFT 2.52376995113052s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.4 | +0.02 | 실측 | [[gpqa-diamond]] 76.56565656565661%×0.4, [[humanitys-last-exam]] 7.4142724745134405%×0.3 |
| 추론 | 44.8 | -0.34 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 76.56565656565661%×1.0, [[humanitys-last-exam]] 7.4142724745134405%×1.0 |
| 코딩 | 41.9 | -0.54 | 실측 | [[terminal-bench]] 15.909090909090901%×0.5 |
| 에이전트 | 49.0 | -0.07 | 실측 | [[tau2-bench]] 61.11111111111111%×1.0, [[terminal-bench]] 15.909090909090901%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 52.7 | +0.18 | 실측 | [[aa-lcr]] 53.0%×1.0 |
| 지시 따르기 | 42.1 | -0.53 | 실측 | [[ifbench]] 41.4965986394558%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
