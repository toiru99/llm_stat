---
type: Model
title: DeepSeek V3.1 Terminus
creator: DeepSeek
license: Open
intelligence_index: 31.0
price_blended_usd_1m: 0.343
output_speed_tps: None
context_window: 128000
status: past
size_class: Large
params_b: 685
is_reasoning: false
radar:
  knowledge: { s: 48.8, z: 0.36, r: 55.4, estimated: false }  # 전문 지식
  reasoning: { s: 38.4, z: 0.15, r: 52.2, estimated: false }  # 추론
  coding: { s: 60.7, z: 0.51, r: 57.7, estimated: false }  # 코딩
  agentic: { s: 37.1, z: 0.02, r: 50.2, estimated: false }  # 에이전트
  trust: { s: 26.7, z: -0.01, r: 49.8, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 81.9, z: 0.96, r: 64.3, estimated: false }  # 긴문맥
  instruction: { s: 63.4, z: 0.37, r: 55.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V3.1 Terminus
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-14
timestamp: 2026-08-14T00:00:00Z
---

# DeepSeek V3.1 Terminus

DeepSeek · Open · Large(685B) · 컨텍스트 128k · 종합지능 **31.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $1.64 · 출력 $2.75 · 혼합 $0.343/1M · None t/s · TTFT Nones · 128k ctx` · 가성비 90.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.4 | +0.36 | 실측 | [[aa-omniscience]] 28.0%×1.0, [[gpqa-diamond]] 79.0%×0.4, [[humanitys-last-exam]] 16.0%×0.3 |
| 추론 | 52.2 | +0.15 | 실측 | [[critpt]] 2.0%×1.0, [[gpqa-diamond]] 79.0%×1.0, [[humanitys-last-exam]] 16.0%×1.0 |
| 코딩 | 57.7 | +0.51 | 실측 | [[scicode]] 41.0%×1.0, [[terminal-bench]] 30.0%×0.5 |
| 에이전트 | 50.2 | +0.02 | 실측 | [[gdpval]] 19.0%×1.0, [[tau2-bench]] 37.0%×1.0, [[terminal-bench]] 30.0%×1.0 |
| 신뢰성 | 49.8 | -0.01 | 실측 | [[aa-omniscience]] 25.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.3 | +0.96 | 실측 | [[aa-lcr]] 68.0%×1.0 |
| 지시 따르기 | 55.6 | +0.37 | 실측 | [[ifbench]] 57.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
