---
type: Model
title: DeepSeek V4 Pro
creator: DeepSeek
license: Open
intelligence_index: 32.0
price_blended_usd_1m: 0.1765
output_speed_tps: 71.0
context_window: 1000000
status: current
size_class: Large
params_b: 1600
is_reasoning: false
radar:
  knowledge: { s: 47.0, z: 0.28, r: 54.2, estimated: false }  # 전문 지식
  reasoning: { s: 29.7, z: -0.28, r: 45.8, estimated: false }  # 추론
  coding: { s: 64.8, z: 0.68, r: 60.2, estimated: false }  # 코딩
  agentic: { s: 73.2, z: 1.44, r: 71.5, estimated: false }  # 에이전트
  trust: { s: 11.6, z: -0.68, r: 39.8, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 60.2, z: 0.3, r: 54.5, estimated: false }  # 긴문맥
  instruction: { s: 47.9, z: -0.26, r: 46.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-14
timestamp: 2026-08-14T00:00:00Z
---

# DeepSeek V4 Pro

DeepSeek · Open · Large(1600B) · 컨텍스트 1M · 종합지능 **32.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $0.43 · 출력 $0.87 · 혼합 $0.1765/1M · 71.0 t/s · TTFT 1.73s · 1M ctx` · 가성비 181.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.2 | +0.28 | 실측 | [[aa-omniscience]] 31.0%×1.0, [[gpqa-diamond]] 72.0%×0.4, [[humanitys-last-exam]] 8.0%×0.3 |
| 추론 | 45.8 | -0.28 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 72.0%×1.0, [[humanitys-last-exam]] 8.0%×1.0 |
| 코딩 | 60.2 | +0.68 | 실측 | [[scicode]] 42.0%×1.0, [[terminal-bench]] 36.0%×0.5 |
| 에이전트 | 71.5 | +1.44 | 실측 | [[tau2-bench]] 91.0%×1.0, [[terminal-bench]] 36.0%×1.0 |
| 신뢰성 | 39.8 | -0.68 | 실측 | [[aa-omniscience]] 12.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 54.5 | +0.3 | 실측 | [[aa-lcr]] 50.0%×1.0 |
| 지시 따르기 | 46.1 | -0.26 | 실측 | [[ifbench]] 46.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
