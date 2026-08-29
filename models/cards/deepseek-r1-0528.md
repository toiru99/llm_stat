---
type: Model
title: DeepSeek R1 0528
creator: DeepSeek
license: Open
intelligence_index: 20.0
price_blended_usd_1m: 1.515
output_speed_tps: None
context_window: 128000
status: past
size_class: Large
params_b: 685
is_reasoning: true
radar:
  knowledge: { s: 52.6, z: 0.59, r: 58.9, estimated: false }  # 전문 지식
  reasoning: { s: 38.1, z: 0.18, r: 52.8, estimated: false }  # 추론
  coding: { s: 52.5, z: 0.21, r: 53.1, estimated: false }  # 코딩
  agentic: { s: 30.8, z: -0.24, r: 46.5, estimated: false }  # 에이전트
  trust: { s: 15.5, z: -0.41, r: 43.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 68.7, z: 0.59, r: 58.9, estimated: false }  # 긴문맥
  instruction: { s: 39.4, z: -0.54, r: 41.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek R1 0528
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
---

# DeepSeek R1 0528

DeepSeek · Open · Large(685B) · 컨텍스트 128k · 종합지능 **20.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 긴문맥
- **약점**: 신뢰성, 지시 따르기

## 실용 지표
`입력 $1.35 · 출력 $3.0 · 혼합 $1.515/1M · None t/s · TTFT Nones · 128k ctx` · 가성비 13.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 58.9 | +0.59 | 실측 | [[aa-omniscience]] 31.0%×1.0, [[gpqa-diamond]] 81.0%×0.4, [[humanitys-last-exam]] 16.0%×0.3 |
| 추론 | 52.8 | +0.18 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 81.0%×1.0, [[humanitys-last-exam]] 16.0%×1.0 |
| 코딩 | 53.1 | +0.21 | 실측 | [[scicode]] 40.0%×1.0, [[terminal-bench]] 16.0%×0.5 |
| 에이전트 | 46.5 | -0.24 | 실측 | [[tau2-bench]] 37.0%×1.0, [[terminal-bench]] 16.0%×1.0 |
| 신뢰성 | 43.9 | -0.41 | 실측 | [[aa-omniscience]] 17.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 58.9 | +0.59 | 실측 | [[aa-lcr]] 57.0%×1.0 |
| 지시 따르기 | 41.9 | -0.54 | 실측 | [[ifbench]] 40.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
