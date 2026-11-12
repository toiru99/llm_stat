---
type: Model
title: DeepSeek V3.1 Terminus (non-reasoning)
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: 0.2485
output_speed_tps: None
context_window: 128000
status: past
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 47.6, z: 0.03, r: 50.5, estimated: false }  # 전문 지식
  reasoning: { s: 42.9, z: -0.01, r: 49.9, estimated: false }  # 추론
  coding: { s: 48.3, z: 0.36, r: 55.3, estimated: false }  # 코딩
  agentic: { s: 48.3, z: 0.46, r: 56.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 51.1, z: -0.06, r: 49.1, estimated: false }  # 긴문맥
  instruction: { s: 40.9, z: -0.51, r: 42.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V3.1 Terminus (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-12
timestamp: 2026-11-12T00:00:00Z
---

# DeepSeek V3.1 Terminus (non-reasoning)

DeepSeek · Open · Large · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $0.27 · 출력 $1.0 · 혼합 $0.2485/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.5 | +0.03 | 실측 | [[gpqa-diamond]] 75.1%×0.4, [[humanitys-last-exam]] 8.7%×0.3 |
| 추론 | 49.9 | -0.01 | 실측 | [[gpqa-diamond]] 75.1%×1.0, [[humanitys-last-exam]] 8.7%×1.0 |
| 코딩 | 55.3 | +0.36 | 실측 | [[terminal-bench]] 31.8%×0.5 |
| 에이전트 | 56.9 | +0.46 | 실측 | [[terminal-bench]] 31.8%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 49.1 | -0.06 | 실측 | [[aa-lcr]] 45.3%×1.0 |
| 지시 따르기 | 42.3 | -0.51 | 실측 | [[ifbench]] 41.2%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
