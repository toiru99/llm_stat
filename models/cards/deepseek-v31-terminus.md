---
type: Model
title: DeepSeek V3.1 Terminus
creator: DeepSeek
license: Open
intelligence_index: 30.0
price_blended_usd_1m: 1.75
output_speed_tps: None
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 50.5, z: 0.5, r: 57.5, estimated: false }  # 전문 지식
  reasoning: { s: 38.4, z: 0.27, r: 54.1, estimated: false }  # 추론
  coding: { s: 60.7, z: 0.63, r: 59.5, estimated: false }  # 코딩
  agentic: { s: 40.4, z: 0.17, r: 52.5, estimated: false }  # 에이전트
  trust: { s: 30.6, z: 0.14, r: 52.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 85.5, z: 1.1, r: 66.6, estimated: false }  # 긴문맥
  instruction: { s: 63.4, z: 0.46, r: 56.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V3.1 Terminus
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# DeepSeek V3.1 Terminus

DeepSeek · Open · Unknown · 컨텍스트 128k · 종합지능 **30.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $1.64 · 출력 $2.75 · 혼합 $1.75/1M · None t/s · TTFT Nones · 128k ctx` · 가성비 17.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.5 | +0.5 | 실측 | [[aa-omniscience]] 28.0%×1.0, [[gpqa-diamond]] 79.0%×0.4, [[humanitys-last-exam]] 15.0%×0.3 |
| 추론 | 54.1 | +0.27 | 실측 | [[critpt]] 2.0%×1.0, [[gpqa-diamond]] 79.0%×1.0, [[humanitys-last-exam]] 15.0%×1.0 |
| 코딩 | 59.5 | +0.63 | 실측 | [[scicode]] 41.0%×1.0, [[terminal-bench]] 30.0%×0.5 |
| 에이전트 | 52.5 | +0.17 | 실측 | [[gdpval]] 19.0%×1.0, [[tau2-bench]] 37.0%×1.0, [[tau3-banking]] 16.0%×1.0, [[terminal-bench]] 30.0%×1.0 |
| 신뢰성 | 52.1 | +0.14 | 실측 | [[aa-omniscience]] 27.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.6 | +1.1 | 실측 | [[aa-lcr]] 65.0%×1.0 |
| 지시 따르기 | 56.9 | +0.46 | 실측 | [[ifbench]] 57.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
