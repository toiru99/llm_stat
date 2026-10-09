---
type: Model
title: DeepSeek R1 Distill Llama 70B
creator: DeepSeek
license: Open
intelligence_index: 8.0
price_blended_usd_1m: 0.74
output_speed_tps: None
context_window: 128000
status: past
size_class: Medium
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 26.1, z: -0.77, r: 38.5, estimated: false }  # 전문 지식
  reasoning: { s: 13.9, z: -1.04, r: 34.4, estimated: false }  # 추론
  coding: { s: 3.0, z: -1.15, r: 32.7, estimated: false }  # 코딩
  agentic: { s: 12.6, z: -1.01, r: 34.8, estimated: false }  # 에이전트
  trust: { s: 17.5, z: -0.43, r: 43.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 11.2, z: -1.23, r: 31.5, estimated: false }  # 긴문맥
  instruction: { s: 22.5, z: -1.33, r: 30.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek R1 Distill Llama 70B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-09
timestamp: 2026-10-09T00:00:00Z
---

# DeepSeek R1 Distill Llama 70B

DeepSeek · Open · Medium · 컨텍스트 128k · 종합지능 **8.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 전문 지식
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $0.7 · 출력 $1.1 · 혼합 $0.74/1M · None t/s · TTFT Nones · 128k ctx` · 가성비 10.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 38.5 | -0.77 | 실측 | [[aa-omniscience]] 19.0%×1.0, [[gpqa-diamond]] 40.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 34.4 | -1.04 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 40.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 32.7 | -1.15 | 실측 | [[terminal-bench]] 2.0%×0.5 |
| 에이전트 | 34.8 | -1.01 | 실측 | [[tau2-bench]] 22.0%×1.0, [[terminal-bench]] 2.0%×1.0 |
| 신뢰성 | 43.6 | -0.43 | 실측 | [[aa-omniscience]] 19.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 31.5 | -1.23 | 실측 | [[aa-lcr]] 10.0%×1.0 |
| 지시 따르기 | 30.0 | -1.33 | 실측 | [[ifbench]] 28.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
