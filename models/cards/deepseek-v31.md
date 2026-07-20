---
type: Model
title: DeepSeek V3.1
creator: DeepSeek
license: Open
intelligence_index: 21.0
price_blended_usd_1m: 0.7
output_speed_tps: None
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 50.6, z: 0.48, r: 57.2, estimated: false }  # 전문 지식
  reasoning: { s: 36.8, z: 0.16, r: 52.4, estimated: false }  # 추론
  coding: { s: 56.0, z: 0.41, r: 56.1, estimated: false }  # 코딩
  agentic: { s: 37.6, z: 0.05, r: 50.8, estimated: false }  # 에이전트
  trust: { s: 22.4, z: -0.25, r: 46.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 69.7, z: 0.62, r: 59.3, estimated: false }  # 긴문맥
  instruction: { s: 40.8, z: -0.48, r: 42.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V3.1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-20
timestamp: 2026-07-20T00:00:00Z
---

# DeepSeek V3.1

DeepSeek · Open · Unknown · 컨텍스트 128k · 종합지능 **21.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 신뢰성, 지시 따르기

## 실용 지표
`입력 $0.59 · 출력 $1.69 · 혼합 $0.7/1M · None t/s · TTFT Nones · 128k ctx` · 가성비 30.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.2 | +0.48 | 실측 | [[aa-omniscience]] 29.0%×1.0, [[gpqa-diamond]] 78.0%×0.4, [[humanitys-last-exam]] 13.0%×0.3 |
| 추론 | 52.4 | +0.16 | 실측 | [[critpt]] 2.0%×1.0, [[gpqa-diamond]] 78.0%×1.0, [[humanitys-last-exam]] 13.0%×1.0 |
| 코딩 | 56.1 | +0.41 | 실측 | [[scicode]] 39.0%×1.0, [[terminal-bench]] 25.0%×0.5 |
| 에이전트 | 50.8 | +0.05 | 실측 | [[tau2-bench]] 37.0%×1.0, [[terminal-bench]] 25.0%×1.0 |
| 신뢰성 | 46.2 | -0.25 | 실측 | [[aa-omniscience]] 20.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 59.3 | +0.62 | 실측 | [[aa-lcr]] 53.0%×1.0 |
| 지시 따르기 | 42.7 | -0.48 | 실측 | [[ifbench]] 41.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
