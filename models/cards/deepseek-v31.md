---
type: Model
title: DeepSeek V3.1
creator: DeepSeek
license: Open
intelligence_index: 21.0
price_blended_usd_1m: 0.681
output_speed_tps: None
context_window: 128000
status: past
size_class: Large
params_b: 685
is_reasoning: false
radar:
  knowledge: { s: 48.8, z: 0.35, r: 55.3, estimated: false }  # 전문 지식
  reasoning: { s: 36.8, z: 0.04, r: 50.7, estimated: false }  # 추론
  coding: { s: 56.0, z: 0.29, r: 54.4, estimated: false }  # 코딩
  agentic: { s: 37.6, z: 0.01, r: 50.2, estimated: false }  # 에이전트
  trust: { s: 17.4, z: -0.48, r: 42.8, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 68.7, z: 0.53, r: 58.0, estimated: false }  # 긴문맥
  instruction: { s: 40.8, z: -0.55, r: 41.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V3.1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-27
timestamp: 2026-08-27T00:00:00Z
---

# DeepSeek V3.1

DeepSeek · Open · Large(685B) · 컨텍스트 128k · 종합지능 **21.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 신뢰성, 지시 따르기

## 실용 지표
`입력 $0.59 · 출력 $1.69 · 혼합 $0.681/1M · None t/s · TTFT Nones · 128k ctx` · 가성비 30.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.3 | +0.35 | 실측 | [[aa-omniscience]] 29.0%×1.0, [[gpqa-diamond]] 78.0%×0.4, [[humanitys-last-exam]] 14.0%×0.3 |
| 추론 | 50.7 | +0.04 | 실측 | [[critpt]] 2.0%×1.0, [[gpqa-diamond]] 78.0%×1.0, [[humanitys-last-exam]] 14.0%×1.0 |
| 코딩 | 54.4 | +0.29 | 실측 | [[scicode]] 39.0%×1.0, [[terminal-bench]] 25.0%×0.5 |
| 에이전트 | 50.2 | +0.01 | 실측 | [[tau2-bench]] 37.0%×1.0, [[terminal-bench]] 25.0%×1.0 |
| 신뢰성 | 42.8 | -0.48 | 실측 | [[aa-omniscience]] 17.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 58.0 | +0.53 | 실측 | [[aa-lcr]] 57.0%×1.0 |
| 지시 따르기 | 41.7 | -0.55 | 실측 | [[ifbench]] 41.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
