---
type: Model
title: DeepSeek V3.1 Terminus (Non-reasoning)
creator: DeepSeek
license: Open
intelligence_index: 14.0
price_blended_usd_1m: 0.343
output_speed_tps: None
context_window: 128000
status: past
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 41.2, z: -0.02, r: 49.6, estimated: false }  # 전문 지식
  reasoning: { s: 29.6, z: -0.29, r: 45.7, estimated: false }  # 추론
  coding: { s: 48.5, z: 0.46, r: 57.0, estimated: false }  # 코딩
  agentic: { s: 42.9, z: 0.2, r: 52.9, estimated: false }  # 에이전트
  trust: { s: 10.3, z: -0.72, r: 39.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 50.6, z: -0.0, r: 50.0, estimated: false }  # 긴문맥
  instruction: { s: 40.8, z: -0.53, r: 42.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V3.1 Terminus (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-23
timestamp: 2026-09-23T00:00:00Z
---

# DeepSeek V3.1 Terminus (Non-reasoning)

DeepSeek · Open · Large · 컨텍스트 128k · 종합지능 **14.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $0.27 · 출력 $1.0 · 혼합 $0.343/1M · None t/s · TTFT Nones · 128k ctx` · 가성비 40.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.6 | -0.02 | 실측 | [[aa-omniscience]] 24.0%×1.0, [[gpqa-diamond]] 75.0%×0.4, [[humanitys-last-exam]] 9.0%×0.3 |
| 추론 | 45.7 | -0.29 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 75.0%×1.0, [[humanitys-last-exam]] 9.0%×1.0 |
| 코딩 | 57.0 | +0.46 | 실측 | [[terminal-bench]] 32.0%×0.5 |
| 에이전트 | 52.9 | +0.2 | 실측 | [[tau2-bench]] 37.0%×1.0, [[terminal-bench]] 32.0%×1.0 |
| 신뢰성 | 39.3 | -0.72 | 실측 | [[aa-omniscience]] 12.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 50.0 | +-0.0 | 실측 | [[aa-lcr]] 45.0%×1.0 |
| 지시 따르기 | 42.0 | -0.53 | 실측 | [[ifbench]] 41.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
