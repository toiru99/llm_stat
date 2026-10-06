---
type: Model
title: DeepSeek V3 0324
creator: DeepSeek
license: Open
intelligence_index: 10.0
price_blended_usd_1m: 0.2325
output_speed_tps: None
context_window: 128000
status: past
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 37.3, z: -0.24, r: 46.4, estimated: false }  # 전문 지식
  reasoning: { s: 23.5, z: -0.59, r: 41.2, estimated: false }  # 추론
  coding: { s: 43.1, z: 0.23, r: 53.4, estimated: false }  # 코딩
  agentic: { s: 20.0, z: -0.72, r: 39.2, estimated: false }  # 에이전트
  trust: { s: 12.4, z: -0.66, r: 40.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 46.1, z: -0.17, r: 47.5, estimated: false }  # 긴문맥
  instruction: { s: 40.8, z: -0.56, r: 41.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V3 0324
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-06
timestamp: 2026-10-06T00:00:00Z
---

# DeepSeek V3 0324

DeepSeek · Open · Large · 컨텍스트 128k · 종합지능 **10.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $0.24 · 출력 $0.9 · 혼합 $0.2325/1M · None t/s · TTFT Nones · 128k ctx` · 가성비 43.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.4 | -0.24 | 실측 | [[aa-omniscience]] 24.0%×1.0, [[gpqa-diamond]] 65.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 41.2 | -0.59 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 65.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 53.4 | +0.23 | 실측 | [[scicode]] 39.0%×1.0, [[terminal-bench]] 15.0%×0.5 |
| 에이전트 | 39.2 | -0.72 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 47.0%×1.0, [[tau3-banking]] 5.0%×1.0, [[terminal-bench]] 15.0%×1.0 |
| 신뢰성 | 40.2 | -0.66 | 실측 | [[aa-omniscience]] 14.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 47.5 | -0.17 | 실측 | [[aa-lcr]] 41.0%×1.0 |
| 지시 따르기 | 41.6 | -0.56 | 실측 | [[ifbench]] 41.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
