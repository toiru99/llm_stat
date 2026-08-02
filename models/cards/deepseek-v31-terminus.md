---
type: Model
title: DeepSeek V3.1 Terminus
creator: DeepSeek
license: Open
intelligence_index: 30.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Large
params_b: 685
is_reasoning: false
radar:
  knowledge: { s: 50.5, z: 0.44, r: 56.5, estimated: false }  # 전문 지식
  reasoning: { s: 38.4, z: 0.2, r: 53.0, estimated: false }  # 추론
  coding: { s: 60.7, z: 0.57, r: 58.5, estimated: false }  # 코딩
  agentic: { s: 39.5, z: 0.12, r: 51.8, estimated: false }  # 에이전트
  trust: { s: 29.9, z: 0.09, r: 51.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 85.5, z: 1.07, r: 66.0, estimated: false }  # 긴문맥
  instruction: { s: 63.4, z: 0.42, r: 56.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V3.1 Terminus
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-02
timestamp: 2026-08-02T00:00:00Z
---

# DeepSeek V3.1 Terminus

DeepSeek · Open · Large(685B) · 컨텍스트 128k · 종합지능 **30.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $1.64 · 출력 $2.75 · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 56.5 | +0.44 | 실측 | [[aa-omniscience]] 28.0%×1.0, [[gpqa-diamond]] 79.0%×0.4, [[humanitys-last-exam]] 15.0%×0.3 |
| 추론 | 53.0 | +0.2 | 실측 | [[critpt]] 2.0%×1.0, [[gpqa-diamond]] 79.0%×1.0, [[humanitys-last-exam]] 15.0%×1.0 |
| 코딩 | 58.5 | +0.57 | 실측 | [[scicode]] 41.0%×1.0, [[terminal-bench]] 30.0%×0.5 |
| 에이전트 | 51.8 | +0.12 | 실측 | [[gdpval]] 19.0%×1.0, [[tau2-bench]] 37.0%×1.0, [[tau3-banking]] 16.0%×1.0, [[terminal-bench]] 30.0%×1.0 |
| 신뢰성 | 51.3 | +0.09 | 실측 | [[aa-omniscience]] 27.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.0 | +1.07 | 실측 | [[aa-lcr]] 65.0%×1.0 |
| 지시 따르기 | 56.4 | +0.42 | 실측 | [[ifbench]] 57.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
