---
type: Model
title: DeepSeek V4 Pro (non-reasoning)
creator: DeepSeek
license: Open
intelligence_index: 21.0
price_blended_usd_1m: 0.1765
output_speed_tps: 93.0
context_window: 1000000
status: past
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 46.2, z: 0.17, r: 52.5, estimated: false }  # 전문 지식
  reasoning: { s: 29.0, z: -0.35, r: 44.7, estimated: false }  # 추론
  coding: { s: 54.5, z: 0.6, r: 59.1, estimated: false }  # 코딩
  agentic: { s: 73.2, z: 1.3, r: 69.6, estimated: false }  # 에이전트
  trust: { s: 10.3, z: -0.76, r: 38.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 59.6, z: 0.23, r: 53.4, estimated: false }  # 긴문맥
  instruction: { s: 47.9, z: -0.27, r: 45.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Pro (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-10
timestamp: 2026-10-10T00:00:00Z
---

# DeepSeek V4 Pro (non-reasoning)

DeepSeek · Open · Large · 컨텍스트 1M · 종합지능 **21.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $0.43 · 출력 $0.87 · 혼합 $0.1765/1M · 93.0 t/s · TTFT 1.69s · 1M ctx` · 가성비 119.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 52.5 | +0.17 | 실측 | [[aa-omniscience]] 31.0%×1.0, [[gpqa-diamond]] 72.0%×0.4, [[humanitys-last-exam]] 8.0%×0.3 |
| 추론 | 44.7 | -0.35 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 72.0%×1.0, [[humanitys-last-exam]] 8.0%×1.0 |
| 코딩 | 59.1 | +0.6 | 실측 | [[terminal-bench]] 36.0%×0.5 |
| 에이전트 | 69.6 | +1.3 | 실측 | [[tau2-bench]] 91.0%×1.0, [[terminal-bench]] 36.0%×1.0 |
| 신뢰성 | 38.6 | -0.76 | 실측 | [[aa-omniscience]] 12.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 53.4 | +0.23 | 실측 | [[aa-lcr]] 53.0%×1.0 |
| 지시 따르기 | 45.9 | -0.27 | 실측 | [[ifbench]] 46.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
